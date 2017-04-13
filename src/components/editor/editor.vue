<template lang="html">
	<div class="container">
		<div class="editor-container">
			<h2 class="editor-container__title">{{ title }}</h2>
			<input v-model = "Editor.title"
				:placeholder = "placeholder"
				class="editor-container__input"
				type="text"
			/>
			<div class="editor-container__editor">
				<quill-editor ref="blogEditor"
					v-model="Editor.content"
					:options="Editor.options"
					>
				</quill-editor>
			</div>
			<button @click = "sent()"
				class="editor-container__button _send"
				type="button"
				ripple-light
				>Отправить</button>
			<button @click = "clear()"
				class="editor-container__button _clear"
				type="button"
				ripple-light
				>Очистить</button>
		</div>
	</div>
</template>

<script>

	import Quill from 'quill';
	import { ImageResize } from 'quill-image-resize-module';
	import { ImageDrop } from 'quill-image-drop-module';

	Quill.register('modules/imageResize', ImageResize);
	Quill.register('modules/imageDrop', ImageDrop);

	export default {
		data() {
			return {
				name: 'base-example',
				title: 'Новый пост в блоге',
				placeholder: 'Название поста...',
				Editor: {
					title: '',
					time: new Date(),
					content: '',
					options: {
						placeholder: 'Текст нового поста...',
						modules: {
							imageDrop: true,
							imageResize: {
								displaySize: true
							}
						}
					}
				}
			}
		},
		watch: {
			Editor() {
				console.log(this.Editor.content.length);
			}
		},
		methods: {
			sent() {
				let $data = this;
				let dateOptions = {
					minute: 'numeric',
					hour: 'numeric',
					day: 'numeric',
					month: '2-digit',
					year: '2-digit'
				};
				let post = {
					title: $data.Editor.title,
					time: $data.Editor.time.toLocaleString('ru-RU' , dateOptions ),
					content: $data.Editor.content
				};
				this.$http.post('posts.json', post )
					.then(response => {
						$data.Editor.title = ''
						$data.Editor.content = ''
						$data.$swal(
							'Ура!',
							'Пост добавлен, посмотрите в блоге.',
							'success'
						)
					}, error => {
						$data.$swal(
							'Что-то пошло не так...',
							'Попробуйте ещё раз!',
							'error'
						)
					});
			},
			clear() {
				this.$swal({
					title: 'Вы уверены?',
					text: "Отменить действие нельзя!",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#2ecc71',
					cancelButtonColor: '#e74c3c',
					confirmButtonText: 'Да, удалить черновик',
					cancelButtonText: 'Отмена'
				}).then( () => {
					this.$swal(
						'Удалено!',
						'Черновик очищен.',
						'success'
					);
					this.Editor.title = ''
					this.Editor.content = ''
				})
			}
		},
		computed: {
			editor() {
				return this.$refs.blogEditor.quillEditor
			}
		},
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.editor-container {
		&__title {}
		&__input {
			width: 100%;
			margin: 1rem 0;
			padding: 0 1rem;
			line-height: 3;
			color: $black transparent;
			border: solid 2px $red;
			outline: none;
			transition: box-shadow .3s ease-in-out;
			&:focus {
				@include MDShadow-1;
			}
		}
		&__editor {
			border: solid 2px $red;
			outline: none;
			transition: box-shadow .3s ease-in-out;
		}
		&__button {
			@include MDButton($white, $red) {
				size: 12.5rem 2.5rem;
				margin: 1rem 0;
				margin-right: 1rem;
			}
			&._send {
				background-color: $green
			}
			&._clear {}
		}
	}
	.ql-container {
		.ql-editor {
			min-height: 20em;
			font-size: 1rem;
		}
		.ql-blank {
			&:focus {
				@include MDShadow-1;
			}
		}
	}

</style>

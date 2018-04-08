/**
 * [index modules]
 * xu.qiang 2018.4.8
 */
require(['jquery','layer','markdown','tomarkdown'],function ($,layerl) {
    $(function() {

		$('#markBtn').on('click', function(event) {
			event.preventDefault();
			var $self = $(this),
				$htmlEdit = $('#htmlEdit'),
				$markEdit = $('#markEdit');

			$markEdit.val(toMarkdown($htmlEdit.val()));
		});

		$('#htmlBtn').on('click', function(event) {
			event.preventDefault();
			var $self = $(this),
				$htmlEdit = $('#htmlEdit'),
				$markEdit = $('#markEdit');

			$markEdit.val(markdown.toHTML($htmlEdit.val()));
		});

		$('#demoBtn').on('click', function(event) {
			event.preventDefault();
			var $self = $(this),
				$htmlEdit = $('#htmlEdit'),
				$markEdit = $('#markEdit');

			var demo = "# MarkDown示例"
					+"\n"
					+ "### Header 3"
					+ "\n"
					+ "> This is a blockquote.\n"
					+ ">\n"
					+ "> This is the second paragraph in the blockquote.\n"
					+ ">\n"
					+ "> ## This is an H2 in a blockquote";

			$htmlEdit.val(demo)
			$markEdit.val(markdown.toHTML($htmlEdit.val()));
		});

		$('#previewBtn').on('click', function(event) {
			event.preventDefault();
			var $self = $(this),
				$htmlEdit = $('#htmlEdit'),
				$markEdit = $('#markEdit');
			
			$markEdit.val(markdown.toHTML($htmlEdit.val()));
			layer.open({
				type:1,
				title: false,
				area:['90%','90%'],
				btn:false,
				content: $markEdit.val()
			});
		});

		$('#clearBtn').on('click', function(event) {
			event.preventDefault();
			var $self = $(this),
				$htmlEdit = $('#htmlEdit'),
				$markEdit = $('#markEdit');

			$htmlEdit.val('');
			$markEdit.val('');
		});
	});
});

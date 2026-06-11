function MultiQuizStudioView(runtime, element) {
    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');

    // Lưu
    $(element).find('#mq-save-btn').on('click', function () {
        var params = {
            'display_name': $(element).find('#mq-display-name').val(),
            'question_html': $(element).find('#mq-question').val(),
            'video_url': $(element).find('#mq-video-url').val(),
            'explanation_html': $(element).find('#mq-explanation').val()
        };

        $.ajax({
            type: 'POST',
            url: handlerUrl,
            data: JSON.stringify(params),
            contentType: 'application/json',
            success: function (response) {
                if (response.result === 'success') {
                    runtime.notify('save', { state: 'end' });
                } else {
                    runtime.notify('error', { msg: response.message || 'Lỗi lưu dữ liệu.' });
                }
            },
            error: function () {
                runtime.notify('error', { msg: 'Lỗi kết nối server.' });
            },
        });
    });

    // Hủy
    $(element).find('#mq-cancel-btn').on('click', function () {
        runtime.notify('cancel', {});
    });
}

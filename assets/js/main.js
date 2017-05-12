console.log("Hello World");

function createPost(elemObj) {
    var post = $("#postId").val();

    var inputData = {
        "POST": post,
        "POST_TYPE": "TEXT",
        "PATH_OF_POST": null
    }
    var url = "http://localhost:3010/post/";
    var jqxhr = $.post(url, inputData);
    jqxhr.done(function(data) {
        console.log(data);
    });

    jqxhr.fail(function(err) {
        console.log(err);
    });


}
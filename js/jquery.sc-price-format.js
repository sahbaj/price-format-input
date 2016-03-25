(function($) {

    $.fn.scPriceFormat = function() {
		this.on("keyup", function (e) {
			var obj = $(this);
			if (obj.val().indexOf('.') != -1) {
				if (obj.val().split(".")[1].length > 2) {
					if (isNaN(parseFloat(this.value)))
						return;
					this.value = Number(obj.val().toString().match(/^\d+(?:\.\d{0,2})?/));
				}
			}
			if (obj.val() < 0)
				this.value = 0;
		});
    }
    
}(jQuery));

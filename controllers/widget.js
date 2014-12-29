var args = arguments[0] || {};

delete args.id;
delete args.__parentSymbol;
delete args.children;

$.iconLabel.applyProperties(args);

var charcode = require(WPATH('charcode')).charcode;

var font = args.font || {};
font.fontFamily = 'FontAwesome';
$.iconLabel.font = font;

var text = args.text || '';
text = text.replace(/fa-[a-z-]+/g, function (match)
{
    if (!_.isNull(charcode[match]) && !_.isUndefined(charcode[match]))
    {
        return String.fromCharCode(charcode[match]);
    }

    return match;
});
$.iconLabel.text = text;

// workaround for android
exports.on = function(name, cb) { return $.iconLabel.addEventListener(name, cb); };
exports.off = function(name, cb) { return $.iconLabel.removeEventListener(name, cb); };
exports._hasListenersForEventType = function(name, flag) {
    return $.iconLabel._hasListenersForEventType(name, flag);
};

exports.bind = $.iconLabel.addEventListener;
exports.unbind = $.iconLabel.removeEventListener;

exports.addEventListener = $.iconLabel.addEventListener;
exports.removeEventListener = $.iconLabel.removeEventListener;

exports.trigger = $.iconLabel.fireEvent;
exports.fireEvent = $.iconLabel.fireEvent;
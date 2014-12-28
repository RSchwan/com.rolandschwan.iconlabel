var args = arguments[0] || {};

delete args.id;
delete args.__parentSymbol;
delete args.children;

var charcode = require(WPATH('charcode')).charcode;

_.each(args, function (value, key)
{
    $.iconLabel[key] = value;
});

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
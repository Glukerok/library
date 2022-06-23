export default {
    makeSlug(str) {
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();

        var answer = '';
        var converter = {
            'а': 'a',   'б': 'b',   'в': 'v',   'г': 'g',   'д': 'd',   'е': 'e',   'ё': 'e',   'ж': 'zh',  'з': 'z',
            'и': 'i',   'й': 'y',   'к': 'k',   'л': 'l',   'м': 'm',   'н': 'n',   'о': 'o',   'п': 'p',   'р': 'r',
            'с': 's',   'т': 't',   'у': 'u',   'ф': 'f',   'х': 'h',   'ц': 'c',   'ч': 'ch',  'ш': 'sh',  'щ': 'sch',
            'ь': '',    'ы': 'y',   'ъ': '',    'э': 'e',   'ю': 'yu',  'я': 'ya',
        };
        for (var i = 0; i < str.length; ++i ) {
            if (converter[str[i]] == undefined){
                answer += str[i];
            } else {
                answer += converter[str[i]];
            }
        }
        str = answer;

        var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
        var to   = "aaaaaeeeeeiiiiooooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

        return str;
    },

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}

(function stringExtension() {
    String.prototype.ensureStart = function (string) {
        if (!this.startsWith(string)) {
            return string + this;

        }
        return this.toString();

    }
    String.prototype.ensureEnd = function (string) {
        if (!this.endsWith(string)) {
            return this + string;
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            const words = this.split(' ');
            const result = [];
            for (const word of words) {
                if (result.join(' ').length + word.length + 3 <= n) {
                    result.push(word);
                } else {
                    break;
                }
            }
            return result.join(" ") + "...";

        } else {
            return this.substring(0, n - 3) + "...";
        }
    }
    String.format = function (string, ...words) {
        for (let i = 0; i < words.length; i++) {
            if (string.includes(`{${i}}`)) {
                string = string.replace(`{${i}}`, words[i]);
            }
        }
        return string;
    }
})();

function returnStr() {
    return "String";
}
let str = 'the quick brown fox jumps over the lazy dog';
console.log(str.truncate(11));



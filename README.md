# Google & Baidu Translate API Wrapper

# Usage
```
https://amm-api-translate.herokuapp.com/translate?engine={engine}&text={text}&to={to}
```
### Query params
| params        | desc | required |
| --------------- |:---------:|:---------:|
| engine | either `google` or `baidu` | `yes` |
| text | text you want to translate | `yes` |
| code | country code for tranlate targe | `no` by default the text will be translated to englih `en` |

### Country code
- [Google Tranlate Country Code](https://cloud.google.com/translate/docs/languages)
- [Baidu Tranlate Country Code](http://api.fanyi.baidu.com/api/trans/product/apidoc#languageList)

# Google & Baidu Translate API Wrapper

### This API uses [eyasliu/google-baidu-translate-api](https://github.com/eyasliu/google-baidu-translate-api) package

# Usage
```
https://api-translate.azharimm.tk/?engine={engine}&text={text}&to={to}
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

# dtstack_encrypt_js
生成加密签名的js库

# dtstack_encrypt_js base64(hmac_sha1(message,sk))
```
<script type="text/javascript" src="./encrypt.js"></script>
<script type="text/javascript">
    var _api_signature = encrypt.getEncryptStr(message,sk);
</script>
```

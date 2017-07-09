# Cryptogram

## Encrypt

```sql
CREATE DEFINER=`user`@`%` FUNCTION `encrypt`(var varchar(1000)) RETURNS varchar(2000) CHARSET utf8
BEGIN 
DECLARE ret varchar(2000); 
set @@session.block_encryption_mode='aes-256-cbc';

select to_base64(AES_ENCRYPT('content', from_base64('key'), from_base64('init vector'))) INTO ret;
RETURN ret; 
END
```

## Decrypt

```sql
CREATE DEFINER=`user`@`%` FUNCTION `decrypt`(var varchar(1000)) RETURNS varchar(2000) CHARSET utf8
BEGIN 
DECLARE ret varchar(2000); 
set @@session.block_encryption_mode='aes-256-cbc';

select AES_DECRYPT(from_base64(var), from_base64('key'), from_base64('init vector')) INTO ret;
RETURN ret; 
END
```
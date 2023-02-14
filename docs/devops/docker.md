# Docker commands

```sh
docker build \
-t ej838639/charis:1.0 \
-t ej838639/charis:latest \
--platform linux/amd64 \
.

docker run \
--name charis \
-p 5173:5173 \
-d \
charis:latest
```

# Test
Check 
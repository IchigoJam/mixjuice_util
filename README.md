# mixbox

a simple data storage service for MixJuice / IchigoJam

## Usage

```bash
git clone https://github.com/IchigoJam/mixbox.git
cd mixbox
deno run -A mixbox.js 8080
```

open http://localhost:8080/

## Command

- C: command
- see also [mixbox.js](mixbox.js)

### GET 取得 (省略時)

- http://[::]:8080/p?C=GET&N=5
- N: length
- D: offset

### put data データ追加

- http://[::]:8080/p?ID=1&D=80
- ID: ID
- D: data

### LOCK データ追加禁止

- http://[::]:8080/p2?ID=1&LOCK
- ID: ID (must be owner ID)
- LOCK

### LOCK データ追加許可

- http://[::]:8080/p2?ID=1&UNLOCK
- ID: ID (must be owner ID)
- UNLOCK

### CLEAR データ追加許可

- http://[::]:8080/p2?ID=1&CLEAR
- ID: ID (must be owner ID)
- CLEAR

### LEN 長さ取得

- http://[::]:8080/p?C=LEN
- U: ID unique

### MAX 最大値

- http://[::]:8080/p?C=MAX
- R: ratio

### MIN 最小値

- http://[::]:8080/p?C=MIN
- R: ratio

### SUM 合計値

- http://[::]:8080/p?C=SUM
- R: ratio

### AVE 平均値

- http://[::]:8080/p?C=AVE
- R: ratio

### RANK 順位

- http://[::]:8080/p?C=RANK&D=80
- D: data
- R: ratio

### SD 標準偏差

- http://[::]:8080/p?C=SD&D=80
- D: data
- R: ratio

### UMIN IDユニークな最小値

- http://[::]:8080/p?C=UMIN
- R: ratio

### UMAX IDユニークな最大値

- http://[::]:8080/p?C=UMAX
- R: ratio

## Blog

- [blog](https://fukuno.jig.jp/3764)

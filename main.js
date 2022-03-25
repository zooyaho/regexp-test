const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`
// 생성자방식: const regexp = new RegExp('the', '')
let regexp = /the/gi

/* 1. test */
regexp = /fox/gi
console.log(regexp.test(str)) // true

/* 2. replace */
console.log('교체', str.replace(regexp,'Rabbit'))
console.log('원본', str)

/* 3. match */
regexp = /the/gi
console.log(str.match(regexp))

/* 문장 끝에 .(온점)이 있는지 체크 */ 
console.log(str.match(/\.$/gi))
console.log(str.match(/\.$/gim))

/* . 활용 예시 */
console.log(str.match(/./g))
console.log(str.match(/h..p/g))

/* a|b 예시 */
console.log(str.match(/fox|dog/g))
console.log(str.match(/fox|dog/))
console.log(str.match(/dog|fox/))

/* ? 예시 */ 
console.log(str.match(/https?/g))

/* {3}, {3,}, {3,5} 예시 */
console.log(str.match(/d{2}/g))
console.log(str.match(/d{2,}/g))
console.log(str.match(/c{1,3}/g))
console.log(str.match(/\w{2,3}/g)) // \w: 숫자나 알파벳
console.log(str.match(/\b\w{2,3}\b/g)) // \b: 두글자 이상 세글자 이하인 '단어'만 출력

/* [abc] */
console.log(str.match(/[fox]/g))
console.log(str.match(/[0-9]{1,}/g))

/* \w, \b, \d, \s */
console.log(str.match(/\w/g))
console.log(str.match(/\bf\w{1,}\b/g)) // f로 시작하는 1개 이상의 단어
console.log(str.match(/\b/g))
console.log(str.match(/\d/g))
console.log(str.match(/\s/g))

const h = `  the hello world   !

`
console.log(h.replace(/\s/g,''))

/* (?=), (?>=) */
console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))
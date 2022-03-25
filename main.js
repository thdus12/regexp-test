let str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
https://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// 생성자
// const regexp = new RegExp('the','gi') // gi -> 대소문자 구분 안하고 검색

// 리터럴
// const regexp = /the/gi 

// console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str)) //true

// const regexp = /fox/gi
// str = str.replace(regexp,'AAA')

// console.log(str)

// const regexp = /\.$/gi
// console.log(
//     str.match(/\bf\w{1,}\b/g)) //소문자 f로 시작하는 단어 찾기

// const h = `  the hello  world     !
// `

// console.log(
//   h.replace(/\s/g,''))


console.log(
  str.match(/(?<=@)/g)
)
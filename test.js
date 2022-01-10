

const fullName = undefined
const ans = fullName ?? 'nothing';
const ans2 = fullName ? fullName : 'nothing';
console.log(ans)
console.log(ans2)

// const date = new Date()
// const month = 13
// const newDate = new Date(date)
// newDate.setMonth(date.getMonth() - month)
// console.log(newDate)

// const day = 30
// const day2 = 15
// const newDate2 = new Date(date)
// const expiredDate = new Date(date)
// newDate2.setDate(date.getDate() - day);
// expiredDate.setDate(date.getDate() + day2);
// console.log('Config: ', newDate2)
// console.log('ExpiredDate: ', expiredDate)

// const generateOTP = (digits = 4, alphanumeric = false) => {
//   const numbers = '0123456789'
//   const letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
//   const specialLetter = '!@#%^&*()_+'
//   const resultString = alphanumeric ? `${numbers}${letters}${specialLetter}` : numbers
//   let otp = ''
//   console.log(Math.floor(Math.random() * resultString.length))
//   for (let i = 0; i < digits; i++) {
//     otp += resultString[Math.floor(Math.random() * resultString.length)]
//   }

//   return otp
// }
// console.log(generateOTP(24, true))

// const renew_before_month = 6
// const customer = {
//   expired_date: new Date('2019-09-23T02:54:39.978+00:00').getTime()
// }
// console.log(customer.expired_date)
// if ( ! customer.expired_date - (renew_before_month*30*24*60*60*1000) > new Date().getTime() ) {
//   console.log('error: 236')
// }


const arr = ['dasdasd', 'dasdasd']
if (Array.isArray(arr) && arr.length !== 0) {
  console.log('true')
} else {
  console.log('false')
}


const monthlyReport = {
  min_date: 'DD/MM/YYYY',
  min: 0,
  max_date: 'DD/MM/YYYY',
  max: 0,
  summary: 0,
  data: [
    {
      .....
    }
  ]
}
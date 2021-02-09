const { execSync } = require('child_process')
const fs = require('fs')

const reconstructedFilename = 'reconstructed.js'

const cafe = (name, age, money) => {
  let solution = fs.readFileSync('./index.js', 'utf-8')

  solution = solution.replace(
    /(let|var) name .*/,
    // to handle undefined or null, it should not be quoted
    `$1 name = ${typeof name === 'string' ? `"${name}"` : name}`
  )
  solution = solution.replace(/(let|var) age .*/, `$1 age = ${age}`)
  solution = solution.replace(/(let|var) money .*/, `$1 money = ${money}`)

  fs.writeFileSync(reconstructedFilename, solution)

  return String(execSync(`node ${reconstructedFilename}`))
}

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename)
  }
})

describe('Cafe Visitation', () => {
  it('should be able to hanndle if visitor name is empty (10)', () => {
    const expected = /Anda tidak boleh masuk!/i
    const result = cafe('')
    const result2 = cafe(null)
    const result3 = cafe()
    expect(result).toMatch(expected)
    expect(result2).toMatch(expected)
    expect(result3).toMatch(expected)
  })

  it('should allow the order if the age is below 17 and having at least 50k money (20)', () => {
    const result = cafe('Armedi', 15, 50000)
    const result2 = cafe('Johan', 13, 65000)
    expect(result).toMatch(/Anda bisa pesan minum. Sisa uang anda: 0/i)
    expect(result2).toMatch(/Anda bisa pesan minum. Sisa uang anda: 15000/i)
  })

  it('should allow the order if the age is above 17 and having at least 300k money (20)', () => {
    const result = cafe('Armedi', 17, 500000)
    const result2 = cafe('Johan', 20, 300000)
    expect(result).toMatch(/Anda bisa pesan minum. Sisa uang anda: 200000/i)
    expect(result2).toMatch(/Anda bisa pesan minum. Sisa uang anda: 0/i)
  })

  it('should print correct message if the money sufficient (10)', () => {
    const result = cafe('Armedi', 17, 500000)
    const result2 = cafe('Johan', 13, 50000)
    const result3 = cafe('Icha', 10, 60000)
    expect(result).toMatch(/Anda bisa pesan minum. Sisa uang anda: 200000/i)
    expect(result2).toMatch(/Anda bisa pesan minum. Sisa uang anda: 0/i)
    expect(result3).toMatch(/Anda bisa pesan minum. Sisa uang anda: 10000/i)
  })

  it('should print correct message if the money insufficient (10)', () => {
    const expected = /Uang tidak cukup. Anda harus pulang./i
    const result = cafe('Armedi', 17, 249000)
    const result2 = cafe('Johan', 13, 45000)
    const result3 = cafe('Icha', 10, 10000)
    expect(result).toMatch(expected)
    expect(result2).toMatch(expected)
    expect(result3).toMatch(expected)
  })
})

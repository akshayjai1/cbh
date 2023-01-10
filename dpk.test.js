const { deterministicPartitionKey, TRIVIAL_PARTITION_KEY } = require('./dpk')

describe('deterministicPartitionKey', () => {
  it('Returns the literal TRIVIAL_PARTITION_KEY when given no input', () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY)
  })

  it('Returns the literal TRIVIAL_PARTITION_KEY when given no input', () => {
    const pk = deterministicPartitionKey({})
    expect(typeof pk).toBe('string')
  })

  it('Returns the literal TRIVIAL_PARTITION_KEY when given no input', () => {
    const pk = deterministicPartitionKey({
      partitionKey: 'ABCD',
    })
    expect(pk).toBe('ABCD')
  })

  it('Returns the literal TRIVIAL_PARTITION_KEY when given no input', () => {
    const pk = deterministicPartitionKey({
      partitionKey:
        'ABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsdABCDAFasdfsdfsdfadfafasdfsdfadsd',
    })
    expect(pk.length).toEqual(256)
  })
})

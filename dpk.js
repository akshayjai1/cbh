const crypto = require('crypto')

export const TRIVIAL_PARTITION_KEY = '0'
const MAX_PARTITION_KEY_LENGTH = 256
const HASH_TYPE = 'sha3-512'
exports.deterministicPartitionKey = (event) => {
  if (!event) return TRIVIAL_PARTITION_KEY

  if (!event.partitionKey) return getDigest(event)

  let candidate = event.partitionKey
  if (typeof candidate !== 'string') {
    candidate = JSON.stringify(candidate)
  }
  if (candidate?.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = getDigest(candidate)
  }
  return candidate
}

const getDigest = (str) => {
  const hashInput = typeof str === 'string' ? str : JSON.stringify(str)
  return crypto.createHash(HASH_TYPE).update(hashInput).digest('hex')
}

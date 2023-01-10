# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
if something is passed in event, first we check that, if it has partitionKey, if yes

1st refactoring:
create getDigest(str) function,
this function convert input into string if it is not, and then returns crypto hash value of that string

2nd refactoring:
if event has not been passed or a falsy value has been passed, then as per the logic of function, it will always return TRIVIAL_PARTITION_KEY, therefore returning it early

3rd refactoring.
if event.partitionKey is falsy, then we are simply returning getDigest of event, (this is derived after studying the logic of existing code)


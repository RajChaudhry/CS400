function* sentence(input) {
    split = input.split(" ")
    yield* split

}

for (x of sentence("All I know is something like a bird within her sang") ) {
    console.log(x)
}



export class IOTABalanceClient {
  constructor(IOTA, nodes) {
    this.providers = nodes
    this.IOTA = IOTA
    this.iota = new IOTA({
      provider: nodes[0]
    })
    this.nodes = nodes
    this.currentNodeIndex = 0
    console.log(nodes[0]);
  }

  switchNodeToIndex(n) {
    this.currentNodeIndex = n
    this.iota.changeNode({ provider: this.nodes[this.currentNodeIndex] })
    if(typeof this.onChangeNode !== 'undefined') {
      this.onChangeNode(this.iota)
    }
  }

  setOnChangeNode(fn) {
    this.onChangeNode = fn;
  }

  async context(fn) {
    try {
      return await fn(this.iota)
    }
    catch (e) {
      var nextNodeIndex = (this.currentNodeIndex + 1) % this.nodes.length
      if(nextNodeIndex === 0) {
        throw new Error("IOTABalanceClient: all nodes have been used. Error:", e)
      }
      console.warn(`Error with IOTA node: ${ this.nodes[this.currentNodeIndex] }. We will try again and change our node to: ${ this.nodes[nextNodeIndex] }`);
      this.switchNodeToIndex(nextNodeIndex)
      return await this.context(fn)
    }
  }
}

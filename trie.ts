class Trie {
  children: any;
  constructor() {
    this.children = {};
  }

  insert(word: string): void {
    let node = this.children;
    for (const char of word) {
      if (!node[char]) {
        node[char] = { isEnd: false };
      }
      node = node[char];
    }
    node.isEnd = true;
  }

  searchPrefix(word: string) {
    let node = this.children;
    for (const char of word) {
      if (!node[char]) {
        return false;
      }
      node = node[char];
    }
    return node;
  }

  search(word: string): boolean {
    return !!this.searchPrefix(word) && this.searchPrefix(word).isEnd;
  }

  startsWith(prefix: string): boolean {
    return !!this.searchPrefix(prefix);
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

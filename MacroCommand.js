let MacroCommand = function() {
  return {
    commandList: [],
    add: function(command) {
      this.commandList.push(command)
    },
    excute: function() {
      this.commandList.map(command => {
        command.excute()
      })
    }
  }
}

let openAcCommand = {
  excute: () => {
    console.log('Open the air conditioning!')
  }
}

let openTvCommand = {
  excute: () => {
    console.log('Open the TV!')
  }
}

let macroCommand = MacroCommand()
macroCommand.add(openAcCommand)
macroCommand.add(openTvCommand)
macroCommand.excute()

function Upload() {
  let arr = Array.from({length: 10}, (item, index) => index + 1)
  for (let i = 0, item; item = arr[i++];) {
    console.log(i)
  }
}

Upload()
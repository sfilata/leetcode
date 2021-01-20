const MacroCommand = function () {
  return {
    commandList: [],
    add(command) {
      this.commandList.push(command);
    },
    excute() {
      this.commandList.map((command) => {
        command.excute();
      });
    },
  };
};

const openAcCommand = {
  excute: () => {
    console.log('Open the air conditioning!');
  },
};

const openTvCommand = {
  excute: () => {
    console.log('Open the TV!');
  },
};

const macroCommand = MacroCommand();
macroCommand.add(openAcCommand);
macroCommand.add(openTvCommand);
macroCommand.excute();

function Upload() {
  const arr = Array.from({ length: 10 }, (item, index) => index + 1);
  for (let i = 0, item; item = arr[i++];) {
    console.log(i);
  }
}

Upload();

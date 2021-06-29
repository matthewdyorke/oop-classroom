class Desk {
  constructor(length, width, height, isWhiteboard){
      this.length = length;
      this.width = width;
      this.height = height;
      this.isWhiteBoard = isWhiteboard;
      this.content = '';
  }

  write(stuff){
    content = content + stuff;
  }

  wipe(){
    if(isWhiteboard)
        content = '';
  }
}

module.exports = Desk

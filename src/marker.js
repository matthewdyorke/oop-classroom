class Marker {
  constructor(size, color, remainingInk){
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk
  }

  write(stuff){
    let stuffWrote = '';
    let words = stuff.split('');
    
    for(var char in words){
        if(char === ' '){
            stuffWrote = stuffWrote + char;
            continue;
        }else if(this.remainingInk >= 1){
            remainingInk --;
            stuffWrote = stuffWrote + char;
        }else{
            break;
        }
    }
    return stuffWrote;
  }
}

module.exports = Marker

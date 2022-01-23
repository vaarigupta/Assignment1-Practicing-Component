import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {
  
   board:string[][]=[['', '', ''],['', '', ''], ['','', '' ]];
   player:number[][]= [[0 , 0,0 ],[0 ,0  ,0 ], [0,0, 0 ]];
   IsPlayer:number =1;
   currentStyles: Record<string, string> = {};
   Option:string='';
   ans:boolean=false;
   count:number =0;
   IsResultBtnPressed:boolean= false;
   IsBoardFilled:boolean = false;
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  ShowOption(i:number,j:number)
  {
    
    var arr = ['X', 'O', ' '];
    this.count++;
    this.Option = arr[this.count%3];
    this.board[i][j] = this.Option;  
    if(this.IsPlayer)
    {
      this.player[i][j] = this.IsPlayer;
      this.IsPlayer = 0;
    }
    else
    {
      this.player[i][j] = this.IsPlayer;
      this.IsPlayer = 1;
    }
  


  }
  CheckBoardFilled()
  {
    var i=0,j=0;
    for( i=0;i<3;i++)
    {
      for(j=0;j<3;j++)
      {
        if(this.board[i][j]=='') 
        {
          this.IsBoardFilled = false;
          return this.IsBoardFilled;
        }
      }
      
  }
  this.IsBoardFilled = true;
  return this.IsBoardFilled;
}
  GetRowResult()
  {

    //iterate row wise
    var i=0, j=0;
    for( i=0;i<3;i++)
    {
      this.ans = false;
      var curr = this.board[i][0];
      j=1;
      while(j<3)
      {
      
        if(this.board[i][j]==curr) j++;
        else break; //if any mismatch then move to next row
       
      }
      if(j==3)  //found a row having all values are same
      {
        this.ans = true;
        return this.ans;
      }
    }
    return this.ans;
  }
  
  
  GetColResult()
  {

    //iterate col wise
    var i=0,j=0;
    for( i=0;i<3;i++)
    {
      this.ans = false;
      var curr = this.board[0][i];
      j=1;
      while(j<3)
      {
        if(this.board[j][i]==curr) j++;
        else break; //if any mismatch then move to next col

      }
      if(j==3) //found a column having all values are same
      {
        this.ans = true;
        return this.ans;
      }
    }
    return this.ans;
  }

  GetResult()
  {
    
    if(!this.CheckBoardFilled())
    {
      alert("Please Complete the board to get the results");
    }
    else
    {
      
    this.IsResultBtnPressed = true;
    var row = this.GetRowResult();
    var col = this.GetColResult();
    this.ans= row || col;
    this.setCurrentStyles();
    }
  }
  
  
setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'background-color': this.ans  ? 'green': 'red',
    'color':  'white',
    'font-style':  this.ans  ? 'italic' : 'normal',
    'font-weight': 'bold'  ,
    'font-size':   '20px',
    'width': '100px',
    'height': '100px'
    
  };
}

  
}

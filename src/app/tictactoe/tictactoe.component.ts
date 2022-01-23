import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {
  
   board:string[][]=[['', '', ''],['', '', ''], ['','', '' ]];
   //IsClicked:boolean=false;
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
    
   // this.IsClicked = !this.IsClicked;
    var arr = ['X', 'O', ' '];
    this.count++;
    this.Option = arr[this.count%3];
    //this.IsClicked?'X':'O';
    this.board[i][j] = this.Option;


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
        else break;
       
      }
      if(j==3)
      {
        this.ans = true;
        return this.ans;
      }
    }
    return this.ans;
  }
  
  
  GetColResult()
  {

    //iterate row wise
    var i=0,j=0;
    for( i=0;i<3;i++)
    {
      this.ans = false;
      var curr = this.board[0][i];
      j=1;
      while(j<3)
      {
        if(this.board[j][i]==curr)
        {
          j++;
        }
        else break;

      }
      if(j==3)
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
    }
  }


  
}

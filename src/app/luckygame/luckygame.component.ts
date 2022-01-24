import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luckygame',
  templateUrl: './luckygame.component.html',
  styleUrls: ['./luckygame.component.css']
})
export class luckygameComponent implements OnInit {
  
   board:string[][]=[['*', '*', '*'],['*', '*', '*'], ['*','*', '*' ]];
   IsClicked:number[][]= [[0 ,0,0 ],[0 ,0  ,0 ], [0,0, 0 ]];
   Option:string='';
   ans:boolean=false;
   count:number =0;
   IsResultBtnPressed:boolean= false;
   IsBoardFilled:boolean = false;
   IsDisabled:boolean = false;
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  ShowOption(i:number,j:number)
  {
    this.count++; 
    this.Option = (Math.ceil(Math.random()*10)%10).toString();
    this.board[i][j] = this.Option;  
    this.IsClicked[i][j] = 1;
  }
  DisabledCheck(i:number,j:number)
  {
    if(this.IsClicked[i][j]==1)
    {
      return this.IsDisabled = true;
    }
    else 
    {
      return this.IsDisabled = false;
    }
  }
  ResetBoard()
  {
    this.board = [['*', '*', '*'],['*', '*', '*'], ['*','*', '*' ]]; 
    this.IsClicked =  [[0 ,0,0 ],[0 ,0  ,0 ], [0,0, 0 ]];
    this.ans=false;
     this.count =0;
     this.IsResultBtnPressed = false;
     this.IsBoardFilled = false;
     
  }
  CheckBoardFilled()
  {
    var i=0,j=0;
    for( i=0;i<3;i++)
    {
      for(j=0;j<3;j++)
      {
        if(this.board[i][j]=='*') 
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
    }
  }
  
  
}

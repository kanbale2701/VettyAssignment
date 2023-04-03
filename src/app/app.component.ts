import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jira Board (Vetty Assignment)';
  listName = '';
  id = 1;
  cardId = 1;
  public jiraBoard: any[] = [];

  addList() {
    if (this.listName) {
      this.jiraBoard.push(
        {
          header: this.listName,
          id: this.id,
          cards: []
        })
      this.listName = '';
      this.id = this.id + 1
    };
  }


  removeList(val: any) {
    if (val) {
      let index = this.jiraBoard.findIndex(x => x.id == val);
      this.jiraBoard.splice(index, 1)
    }
  }

  addCard(val: any) {
    if (val) {
      let date = new Date()
      let jiraBoardList = this.jiraBoard.find(x => x.id == val)

      jiraBoardList.cards.push({
        header: "Header",
        description: JSON.stringify(val) + JSON.stringify(this.cardId),
        time: date,
        parentId: val,
        id: JSON.stringify(val) + JSON.stringify(this.cardId)
      })
    }
    this.cardId += 1;
  }
  removeCard(val: any, parentId: any) {
    if (val && parentId) {
      let cardList = this.jiraBoard.find(x => x.id == parentId).cards;
      let index = cardList.findIndex((x: any) => x.id == val);
      cardList.splice(index, 1)

    }
  }
}

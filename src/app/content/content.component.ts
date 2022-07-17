import { Component, OnInit } from '@angular/core';
import { ItemsType } from '../elements/elements.component.types'
import { CommonService } from '../common.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {

  constructor(
    private service: CommonService
  ) { }

  items: Array<ItemsType> = []
  order: string = 'title'
  onlyDate: boolean = false
  searchText: string = ''
  itemsFound: Array<ItemsType> = []
  newTitle: string = ''

  ngOnInit (): void {
    this.service.getData.subscribe((items: ItemsType[]) => {
      this.items = items
      this.search()
    })
  }

  search = () => {
    const text = this.searchText.toLowerCase()
    this.itemsFound = this.items.filter((item) => {
      item.title = item.title.toLowerCase()
      return item.title.includes(text)
    })
  }

  showDate = (date) => {
    const timestamp = Date.parse(date)
    let dateTime = new Date(timestamp).toLocaleString().split(', ')
    if (this.onlyDate) {
      return dateTime[0]
    }
    return `${dateTime[0]} ${dateTime[1]}`
  }

  addItem = () => {
    if (this.newTitle !== '') {
      const item = {
        id: this.service.utils.makeDataId(),
        title: this.newTitle,
        tags: [],
        date: new Date().toISOString(),
      }
      this.service.addData(item)
    }
  }

  setItem = (item) => {
    this.service.setItem(item)
  }

}

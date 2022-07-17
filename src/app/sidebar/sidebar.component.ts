import { Component, OnInit } from '@angular/core'
import { CommonService } from '../common.service'
import { ItemsType } from '../elements/elements.component.types'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor (
    private service: CommonService
  ) { }

  item: ItemsType | null = null
  newTag: string = ''

  ngOnInit (): void {
    this.service.getItem.subscribe((item: ItemsType | null) => {
      this.item = item
      this.newTag = ''
    })
  }

  addTag = (): void => {
    if (this.newTag !== '') {
      const item = this.item
      const tags = item.tags
      if (tags.indexOf(this.newTag) === -1) {
        tags.push(this.newTag)
        this.service.updateData(this.item)
      }
    }
  }

  deleteTag = (tag): void => {
    const item = this.item
    const tags = item.tags
    const index = tags.indexOf(tag)
    if (index !== -1) {
      tags.splice(index, 1)
      this.service.updateData(this.item)
    }
  }

}

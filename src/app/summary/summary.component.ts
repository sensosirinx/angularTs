import { Component, OnInit } from '@angular/core'
import { ItemsType } from '../elements/elements.component.types'
import { CommonService } from '../common.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})

export class SummaryComponent implements OnInit {

  constructor(
    private service: CommonService
  ) { }

  items: Array<ItemsType> = []
  tags: Array<string> = []

  ngOnInit(): void {
    this.service.getData.subscribe((items: ItemsType[]) => {
      this.items = items
      this.tags = this.service.getUniqTags()
    })
  }

}

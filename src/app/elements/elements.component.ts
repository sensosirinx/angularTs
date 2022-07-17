import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core'
import { CommonService } from '../common.service'
import { ItemsType } from './elements.component.types'


@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html'
})

export class ElementsComponent implements OnInit {

  constructor (
    private el: ElementRef,
    private renderer: Renderer2,
    private service: CommonService
  ) { }

  width: number = 300
  items: Array<ItemsType> = []

  ngOnInit (): void {
    this.setWidth()
    this.service.getData.subscribe((items: ItemsType[]) => this.items = items)
  }

  setWidth = () => {
    this.renderer.setStyle(this.el.nativeElement, 'width', this.width + 'px')
    return false
  }

  loadData = async () => {
    await this.service.loadData()
  }

}

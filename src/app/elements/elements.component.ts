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

  setWidth = (): void => {
    const width: number = (this.width > 100) ? this.width : 100
    this.renderer.setStyle(this.el.nativeElement, 'width', width + 'px')
  }

  loadData = async (): Promise<void> => {
    await this.service.loadData()
  }

}

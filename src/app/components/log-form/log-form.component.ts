import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    //subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe(data => {
      if (data.id !== null) {
        this.id = data.id;
        this.text = data.text;
        this.date = data.date;
        this.isNew = false;
      }

    });
  }

  onSubmit() {
    // check if new log
    if (this.isNew) {
      //create a new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      }
      //add log
      this.logService.addLog(newLog);
    } else {
      // create log to pe updated
      const updateLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      }
      this.logService.updateLog(updateLog);
    }

    //clear the state
    this.clearState();

  }

  clearState() {
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = '';
    this.logService.clearState();
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}

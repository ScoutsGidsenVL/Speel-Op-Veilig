import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  public originalFilter = {'kapoenen-zeehondjes': 'Kapoenen en zeehondjes',
        'kabouters-welpen': 'Kabouters en (zee)welpen',
        'jonggidsen-verkenners-scheepsmakkers': 'Jonggidsen, verkenners en scheepsmakkers',
        'gidsen-verkenners': 'Gidsen en (zee)verkenners',
        'jins-loodsen':'Jins en loodsen',
        'open-kamp': 'Open kamp',
        akabe: 'Akabe',
        leiding:'leiding'};
  public filterArr = ['kapoenen-zeehondjes',
        'kabouters-welpen',
        'jonggidsen-verkenners-scheepsmakkers',
        'gidsen-verkenners',
        'jins-loodsen',
        'open-kamp',
        'akabe',
        'leiding'];
  public filter;
  public questions;
  constructor( private dataService: DataService) {
  }

  ngOnInit() {
      this.questions = this.dataService.getAllQuestions();
      this.filter = this.originalFilter;
  }

    filterGroups($event){
        if($event.detail.value.length === 0 ){
            this.filter = this.originalFilter;
        } else {
            //clear filter
            this.filter = {};
            $event.detail.value.forEach( value => {
                this.filter[value] = this.originalFilter[value];
            });
        }
    }

    checkGroupFilter(answer) {
            if (this.filter[answer.group] !== undefined) {
                return true;
            }
            return false;
        }
    countKeysInFilter() {
        return Object.keys(this.filter).length;
    }
    /*
    chapterHasQuestionsForFilter(chapter) {

    }
    questionHasAnsworForFilter(question) {
        question.answers.forEach( answer => {

        });
        if (this.filter.find(f => f == answer.group)){
            return true;	                return true;
            }


        if (this.filter.find()){

        }
        if (question.answers[group])
    }*/
}

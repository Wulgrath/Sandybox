import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FaqsService } from '../services/faqs.service';
import { FaqActions } from '../store/actions';
import { AppState } from '../store/reducers';
import { FaqSelector } from '../store/selectors';

@Component({
  selector: 'faqs-component',
  styleUrls: ['./faqs.component.scss'],
  templateUrl: 'faqs.component.html',
})
export class FaqsComponent implements OnInit {
  whoFormControl = new FormControl('', Validators.required);
  questionFormControl = new FormControl('', Validators.required);

  faqForm = new FormGroup({
    who: this.whoFormControl,
    question: this.questionFormControl,
  });

  faqs: any;
  faqs$ = this.store.select(FaqSelector.getFaqs);
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(FaqActions.getFaqs());
    this.faqs$.subscribe((a) => (this.faqs = a));
  }

  remove(faqId: any): void {
    this.store.dispatch(FaqActions.deleteFaq({ faqId }));
    console.log({ faqId });
  }

  increment() {
    //this.loading$.subscribe((a) => console.log(a));
  }

  submitFaq() {
    const faqToAdd = this.faqForm.value;

    const existingFaqByUser = this.faqs.find(
      (n: any) => (n.kuka || n.who) === faqToAdd.who
    );

    console.log(existingFaqByUser);

    if (existingFaqByUser) {
      const updatedQuestion: any = {
        id: existingFaqByUser.id,
        question: faqToAdd.question,
      };
      this.store.dispatch(FaqActions.updateFaq(updatedQuestion));
    } else {
      this.store.dispatch(FaqActions.createFaq(faqToAdd));
    }
  }
}

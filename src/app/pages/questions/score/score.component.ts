import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {

  yourscore: string = '';
  fullscore: string = '';

  constructor(private router: Router, private localStorageService: LocalStorageService){ }

  ngOnInit(){
    const score = this.localStorageService.getItem('SCORE');
    const scoreText = score !== null ? JSON.parse(score) : '';
    console.log(scoreText);
    this.yourscore = scoreText.score;
    this.fullscore = scoreText.fullScore;
  }
}

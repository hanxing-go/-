package jxnu.entire;

public class Score {
    public int singlescore=0;
    public int mutiplyscre=0;
    public int SumScore=0;

    public Score(int singlescore, int mutiplyscre) {
        this.singlescore = singlescore;
        this.mutiplyscre = mutiplyscre;
        this.SumScore=singlescore+mutiplyscre;
    }


    public int getSinglescore() {
        return singlescore;
    }

    public int getMutiplyscre() {
        return mutiplyscre;
    }
}

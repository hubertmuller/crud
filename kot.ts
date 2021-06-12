class Kot {

    private message = 'miau';

    miau() {
        console.log('kot robi: ' + this.message);
    }
}

const kotek = new Kot();
kotek.miau();
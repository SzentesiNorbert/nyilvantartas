<style>

* {
    margin: 0;
    padding: 0;
}

@import url('https://fonts.googleapis.com/css?family=Merriweather|Roboto|Ubuntu');
body {
    background-image: url('https://www.legalsupportnetwork.co.uk/sites/default/files/global%20people%20on%20blue%20ground.jpg');
}

#body {
    margin: 20px;
    font-family: 'Ubuntu 40px', serif;
    background-image: url('https://www.legalsupportnetwork.co.uk/sites/default/files/global%20people%20on%20blue%20ground.jpg');
    border-radius: 10px;
}

.cim {
    font-family: 'Merriweather', serif;
    font-size: 30px;
    text-shadow: 3px 1px 4px;
}

.kerek {
    margin: 6px;
    padding: 13px;
    background-color: #6a694d;
    color: white;
    box-shadow: 1px 1px 50px #92dac4;
    border-radius: 10px;
}

.red {
    color: #cf3443;
    background-color: grey;
    font-weight: bolder;
    margin: 20px;
    padding: 10px;
    box-shadow: 1px 1px 5px #000;
    border-radius: 10px;
}

</style>

<template>

<div id="app">
    <div v-show="view==='list'">
        <b-navbar variant="dark" type="dark">
            <b-navbar-nav href="#">
                <b-btn variant="light" @click="ujpartner">Új üzleti partner felvétele</b-btn>
            </b-navbar-nav>
            <b-nav-form action="#">
                <b-form-input class="mr-sm-2" type="text" placeholder="Üzleti partner vagy Cég" v-model="keres" @click.native="keres=''" @keyup.native.enter="keresenter" />
            </b-nav-form>
        </b-navbar>
    </div>
    <div v-show="view==='uja' || view==='edit'">
        <b-navbar variant="dark" type="dark">
            <b-navbar-nav href="#">
                <b-btn variant="light" @click="view='list'">Vissza a listához</b-btn>
            </b-navbar-nav>
        </b-navbar>
    </div>
    <div id="body">
        <div class="text-center cim">Üzleti partnerek nyilvántartása</div>
        <b-btn variant="light" @click="view='list'">Partner Lista</b-btn>
        <div style="height:4px;"></div>
        <div v-show="view==='list' && tbody.length" class="kerek">
            <div style="height:13px;"></div>
            <b-table striped dark :fields="thead" :items="tbody">
                <template slot="_id" slot-scope="data">
                    <b-btn size="sm" @click="edit(`${data.value}`)" variant="success">Módosítás</b-btn>
                    /
                    <b-btn size="sm" @click="del(`${data.value}`)" variant="danger">Törlés</b-btn>
                </template>
            </b-table>
        </div>
        <div v-show="!tbody.length  && view==='list'" class="text-center">
            <br>
            <div v-if="tbody_origin.length" class="red">
                Nincs az adatbázisban a keresési feltételnek megfelelő partner!
            </div>
            <div v-if="!tbody_origin.length" class="red">
                Az adatbázis üres!
            </div>
            <br>
            <br>
            <b-btn variant="danger" @click="ujpartner">Új partner felvétele</b-btn>
        </div>
        <div class="row" v-show="view==='uja' || view==='edit'">
            <div class="col"></div>
            <div class="col">
                <hr>
                <h5 class="text-center" v-if="!form._id">Új partner felvétele</h5>
                <h5 class="text-center" v-if="form._id">Adatmódosítás</h5>
                <hr>
                <b-form name="f1">
                    Partner neve
                    <div class="row">
                        <div class="col">
                            <b-input placeholder="Partner neve" required ref="allnevi" v-model="form.cegnev" />
                        </div>
                        <div v-if="form.cegnev && !form.nev">
                            <b-btn @click="csere">&#8675;</b-btn>
                        </div>
                    </div>
                    Cég neve

                    <b-input ref="cegnevi" required placeholder="Cég neve" v-model="form.nev" /> Cég címe
                    <b-input ref="cegnevi" required placeholder="Cég címe" v-model="form.cim" /> Cég telefonszáma
                    <b-input placeholder="Cég telefonszáma" required v-model="form.tel" /> Cég adószáma
                    <b-input placeholder="Cég adószáma" required v-model="form.asz" /> Cég nyilvántartási száma
                    <b-input placeholder="Cég nyilvántartási száma" required v-model="form.nysz" /> Cég bankszámla száma
                    <b-input placeholder="Cég bankszámla száma" required v-model="form.bsz" /> Kapcsolat tipusa
                    <b-input list="tipus" placeholder="Tipusa" required v-model="form.tipus" />
                    <datalist id="tipus">
                        <option v-for="tipus in flist">{{tipus}}</option>
                    </datalist>

                    Utolsó tranzakció dátuma
                    <b-input type="date" list="tipus" v-model="form.utrd" />
                </b-form>
                <hr>
                <div class="text-center">
                    <b-btn v-if="form.cegnev && form.nev && form.tipus" @click='ment'>Mentés</b-btn>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
    <div v-if="hiba" class="text-center red">
        Hálózati hiba, a módosításokat nem sikerült menteni!
    </div>
</div>

</template>

<script>

var fullpath = 'http://localhost:3000'
export default {
    name: 'app',
    data() {
        return {
            keres: '',
            hiba: false,
            view: 'list',
            thead: [

                {
                    key: 'nev',
                    label: 'Cég neve',
                    sortable: true
                }, {
                    key: 'cegnev',
                    label: 'Partner neve',
                    sortable: true
                }, {
                    key: 'nev',
                    label: 'Cím',
                    sortable: true
                }, {
                    key: 'tel',
                    label: 'Cég telefonszáma',
                    mask: '(**)***-****',
                    sortable: true
                }, {
                    key: 'utrd',
                    label: 'Utolsó tranzakció dátuma',
                    sortable: true,
                    'class': 'text-center'
                }, {
                    key: 'tel',
                    label: 'Cég adószám',
                    mask: '********-*-**'
                }, {
                    key: 'tel',
                    label: 'Cég nyilvántartási szám',
                    mask: '**-**-******'
                }, {
                    key: 'tel',
                    label: 'Cég bankszámla száma',
                    mask: '********-********'
                }, {
                    key: 'tipus',
                    label: 'Kapcsolat típusa',
                    sortable: true
                }, {
                    key: 'tipus',
                    label: 'Típus',
                    sortable: true
                }, {
                    key: '_id',
                    label: 'Szerk. / Törl.',
                    'class': 'text-right'
                },
            ],
            tbody_origin: [],
            form: {}
        }
    },
    methods: {
        csere() {
                this.$set(this.form, 'nev', this.form.cegnev)
                this.$set(this.form, 'cegnev', '')
                let ivsi = setInterval(() => {
                    this.$refs.allnevi.focus()
                    clearInterval(ivsi)
                }, 100)
            },
            ment() {
                if (this.form._id) {
                    this.axios
                        .post(fullpath + '/modify', this.form)
                        .then(resp => {
                            if (resp.data.n) {
                                this.view = 'list'
                            } else {
                                this.hiba = true
                                let iv = setInterval(() => {
                                    this.hiba = false
                                    clearInterval(iv)
                                }, 1500)
                            }
                        })
                } else {
                    this.keres = this.form.cegnev
                    this.axios
                        .post(fullpath + '/', this.form)
                        .then(resp => {
                            if (resp.data._id) {
                                this.form._id = resp.data._id
                                this.tbody_origin.push(this.form)
                                this.view = 'list'
                            } else {
                                this.hiba = true
                                let iv = setInterval(() => {
                                    this.hiba = false
                                    clearInterval(iv)
                                }, 1500)
                            }
                        })
                }
            },
            ujpartner() {
                this.form = {
                    szule: new Date().getYear() + 1900,
                    utrd: new Date()
                        .toLocaleDateString('hu-HU')
                        .split('.')
                        .map(v => v.trim())
                        .slice(0, 3)
                        .join('-')
                }
                this.form.cegnev = this.keres
                this.view = 'uja'
                let ivsi = setInterval(() => {
                    this.$refs.cegnevi.focus()
                    clearInterval(ivsi)
                }, 100)

            },
            keresenter() {
                if (this.tbody.length === 0) this.ujpartner()
                else if (this.tbody.length === 1) this.edit(this.tbody[0]._id)
            },
            edit(x) {
                if (this.tbody_origin.find(v => v._id == x)) {
                    this.form = this.tbody_origin.find(v => v._id == x)
                    this.view = 'uja'
                }
            },
            del(x) {
                this.axios
                    .post(fullpath + '/del', {
                        id: x
                    })
                    .then(resp => {
                        if (resp.data.ok) {
                            this.tbody_origin =
                                this.tbody_origin.map(v => (v._id == x) ? (v._id = '', v) : v)
                            this.tbody_origin.sort((a, b) => b._id.localeCompare(a._id))
                            this.tbody_origin.pop()
                            this.tbody_origin.sort((a, b) => a.nev.localeCompare(b.nev))
                            this.keres = ''
                        } else {
                            this.hiba = true
                            let iv = setInterval(() => {
                                this.hiba = false
                                clearInterval(iv)
                            }, 1500)
                        }
                    })
            }
    },
    computed: {
        flist() {
                let tipusset = new Set()
                this.tbody_origin.forEach(v =>
                    tipusset.add(v.tipus)
                )
                let tipuslist = []
                tipusset.forEach(v => tipuslist.push(v))
                tipuslist.sort((a, b) => a.localeCompare(b))
                return tipuslist
            },
            tbody() {
                let kt = new RegExp(this.keres, 'i')
                return this
                    .tbody_origin
                    .filter(v =>
                        kt.test(v.cegnev) || kt.test(v.nev) || kt.test(v.tipus)
                    )
                    .slice(0, 10)
            }
    },
    mounted() {
        this.axios
            .get(fullpath + '/alldata')
            .then(resp => this.tbody_origin = resp.data.sort(
                (a, b) => a.nev.localeCompare(b.nev)
            ))
    }
}

</script>

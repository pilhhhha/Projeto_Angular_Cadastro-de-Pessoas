import { Component } from '@angular/core';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html' 
})
export class CadastroComponent {
title = 'exercicio-formulario';

  esconderBotaoNovo = false;
  esconderBotaoAlterar = false;
  esconderBotaoExcluir = false;
  esconderBotaoProcurar = false;
  esconderBotaoGravar = true;
  esconderBotaoCancelar = true;
  esconderBotaoConfirmarExclusao = true;
  esconderCampoProcura = true;
  esconderBotaoProcurarAcao = true;

  desabilitarCamposCadastro = true;

  novo(){
    this.esconderBotaoNovo = true;
    this.esconderBotaoAlterar = true;
    this.esconderBotaoExcluir = true;
    this.esconderBotaoProcurar = true;
    this.esconderBotaoGravar = false;
    this.esconderBotaoCancelar = false;
    this.desabilitarCamposCadastro = false;
  }

  alterar(){
    this.esconderBotaoNovo = true;
    this.esconderBotaoAlterar = true;
    this.esconderBotaoExcluir = true;
    this.esconderBotaoProcurar = true;
    this.esconderBotaoGravar = false;
    this.esconderBotaoCancelar = false;
    this.desabilitarCamposCadastro = false;
  }

  excluir(){
    this.esconderBotaoNovo = true;
    this.esconderBotaoAlterar = true;
    this.esconderBotaoExcluir = true;
    this.esconderBotaoProcurar = true;
    this.esconderBotaoGravar = true;
    this.esconderBotaoConfirmarExclusao = false;
    this.esconderBotaoCancelar = false;
  }

  gravar(){
    this.esconderBotaoNovo = false;
    this.esconderBotaoAlterar = false;
    this.esconderBotaoExcluir = false;
    this.esconderBotaoProcurar = false;
    this.esconderBotaoGravar = true;
    this.esconderBotaoCancelar = true;
    this.esconderBotaoConfirmarExclusao = true;
    this.desabilitarCamposCadastro = true;
  }

  procurarOpcao(){
    this.esconderBotaoNovo = true;
    this.esconderBotaoAlterar = true;
    this.esconderBotaoExcluir = true;
    this.esconderBotaoProcurar = true;
    this.esconderBotaoProcurarAcao = false;
    this.esconderBotaoGravar = true;
    this.esconderBotaoConfirmarExclusao = true;
    this.esconderBotaoCancelar = true;
    this.esconderCampoProcura = false;
  }

  procurarAcao(){
    this.esconderBotaoNovo = false;
    this.esconderBotaoAlterar = false;
    this.esconderBotaoExcluir = false;
    this.esconderBotaoProcurar = false;
    this.esconderBotaoGravar = true;
    this.esconderBotaoCancelar = true;
    this.esconderBotaoConfirmarExclusao = true;
    this.esconderCampoProcura = true;
    this.esconderBotaoProcurarAcao = true;
  }

  cancelar(){
    this.esconderBotaoNovo = false;
    this.esconderBotaoAlterar = false;
    this.esconderBotaoExcluir = false;
    this.esconderBotaoProcurar = false;
    this.esconderBotaoGravar = true;
    this.esconderBotaoCancelar = true;
    this.esconderBotaoConfirmarExclusao = true;
    this.desabilitarCamposCadastro = true;
  }
}

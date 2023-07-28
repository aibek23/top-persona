import React, { useEffect, } from "react";
import AdminHeader from '../components/AdminHeader';
import Grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import dynamicConfig from "./grapesjsConfig";
import '../grapesjs-component-code-editor.min.css';
import "grapesjs-preset-newsletter";
import juice from "juice";

const GrapesjsMain = ({data, save}) => {
  useEffect(() => {
    const editor = Grapesjs.init({ ...dynamicConfig() });
    loadGrapesJs(editor); 
  }, []);
  const loadGrapesJs = (editor) => {
    const yourHTMLCode = `
    <html><head><style>* { box-sizing: border-box; } body {margin: 0;}#igxd{box-sizing:border-box;}#ixig{box-sizing:border-box;}#i6p9{box-sizing:border-box;}#igxz{box-sizing:border-box;font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';}#isz4{box-sizing:border-box;}#iezo{box-sizing:border-box;}#i1eag{box-sizing:border-box;}#iudnh{box-sizing:border-box;color:var(--bs-link-color);text-decoration-line:underline;font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';}</style></head><body><body id="iurr"><div id="igxd" class="container"><p id="ixig">
	</p><div id="i6p9"><div id="igxz">Идет набор в начальную группу Beginner!
		<br id="isz4"/>Занятия 3 и 5 раз в неделю в 17:00 
		<br id="iezo"/>Пн, Ср, Пт - грамматика, Вт и Чт толкин клаб
		<br id="i1eag"/>Для записи и подробной информации пишите нам на воцапп, по ссылке ниже
	  </div><a href="http://34.88.24.81/news/645a7a5785de0fce11d1b989#" id="iudnh">wa.me/996500712021</a></div></div></body></body></html>
  `;
    // const editor = Grapesjs.init({ ...dynamicConfig() });
    window.editor = editor;

    // editor.DomComponents.getWrapper().set("content", yourHTMLCode);
    // editor.PluginManager.add("grapesjs-preset-webpage", grapesjsPresetWebpage);
    // editor.setComponents(`
    //   <style>
    //     @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    //   </style>
    // `);
    editor.BlockManager.add('row', {
      label: '<b>Row</b>',
      category: "Layout",
      content: '<div class="row" style="height:150px;background-color: rgba(110, 228, 127, 0.991);"><p > row </p></div>',
    });
    editor.BlockManager.add('container', {
      label: '<b>Container</b>',
      category: "Layout",
      content: '<div class="container" style="height:700px ;     background-color: rgb(139, 219, 219);"><p > container </p></div>',
    });
    editor.BlockManager.add("grid", {
      label: "Grid 2",
      category: "Layout",
      content: gridTemplate
    });
    editor.setComponents('');

    
    editor.on("load", function () {
      var pfx = editor.getConfig().stylePrefix;
      var modal = editor.Modal;
      var cmdm = editor.Commands;
      var codeViewer = editor.CodeManager.getViewer("CodeMirror").clone();
      var pnm = editor.Panels;
      var container = document.createElement("div");
      var btnEdit = document.createElement("button");
      editor.setComponents(data.data);
      const frameEl = editor.Canvas.getFrameEl();
      const linkEl = document.createElement('link');
      linkEl.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
      linkEl.rel = 'stylesheet';
      frameEl.contentDocument.head?.appendChild(linkEl);
      codeViewer.set({
        codeName: "htmlmixed",
        readOnly: false,
        theme: "hopscotch",
        autoBeautify: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        styleActiveLine: true,
        smartIndent: true,
        indentWithTabs: true
      });

      btnEdit.innerHTML = "Edit";
      btnEdit.className = pfx + "btn-prim " + pfx + "btn-import";
     
      btnEdit.onclick = function () {
        var code = codeViewer.editor.getValue();
        editor.DomComponents.getWrapper().set("content", "");
        editor.setComponents(code.trim());
        modal.close();
      };
   

      cmdm.add("html-edit", {
        run: function (editor, sender) {
          sender && sender.set("active", 0);
          var viewer = codeViewer.editor;
      
          modal.setTitle("Edit code");
          if (!viewer) {
            var txtarea = document.createElement("textarea");
            container.appendChild(txtarea);
            container.appendChild(btnEdit);
            codeViewer.init(txtarea);
            viewer = codeViewer.editor;
      
            // Add extraKeys here
            codeViewer.editor.setOption("extraKeys", {
              "Ctrl-S": function() {
                var code = codeViewer.editor.getValue();
                editor.setComponents(code.trim());
                modal.close();
              }
            });
          }
  
          
          var InnerHtml = editor.getHtml();
          var Css = editor.getCss();
          modal.setContent("");
          modal.setContent(container);
          codeViewer.setContent(
            juice(InnerHtml + "<style>" + Css + "</style>"),
            {}
          );
      
          modal.open();
          viewer.refresh();
        }
      });
      pnm.addButton("options", [
        {
          id: "edit",
          className: "fa fa-edit",
          command: "html-edit",
          attributes: {
            title: "Edit"
          }
        }
      ]);
    });
  };
  const gridTemplate = `
    <div class="row" style="height:500px;">
          <div class="col-6" style="background-color: rgb(139, 219, 146);">
            <div class="grid-cell">Cell 1</div>
          </div>
          <div class="col-6" style="background-color: rgb(139, 219, 146);">
            <div class="grid-cell">Cell 2</div>
          </div>
    </div>
`;
  const saveCode = () => {
    const html = window.editor.getHtml();
    const css = window.editor.getCss();
    const code = `<html><head><style>${css}</style></head><body>${html}</body></html>`;
    save(code);
  };
  return (
    <>
    <AdminHeader/>
      <div className="" style={{"marginTop":"45px"}}>
        <div id="gjs"><div>
          <p>erfer</p>
        </div></div>
      <div className="container ml-5 ">
        <button className="btn btn-success ml-5 m-5" style={{ marginRight: "35px" }} onClick={saveCode}>сохранить контент</button>
        </div>
      </div>
    </>
  );
};

export default GrapesjsMain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using MaterialDesignThemes.Wpf;



namespace plattform
{
    /// <summary>
    /// Interaktionslogik für Register.xaml
    /// </summary>
    public partial class Register : Page
    {
       

        public Register()
        {
            InitializeComponent();
             
        }
        

        private void DialogHost_DialogClosing(object sender, MaterialDesignThemes.Wpf.DialogClosingEventArgs eventArgs)
        {

        }
        

       


        private void register(object sender, RoutedEventArgs e)
        {
            WindowViewModel.CurrentPage = ApplicationPage.MainMenu;
            ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
        }

        private void login(object sender, RoutedEventArgs e)
        {
            WindowViewModel.CurrentPage = ApplicationPage.Login;
            ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
        }

        private void registerClicked(object sender, RoutedEventArgs e)
        {
            liz.Content= @"Copyright (c) <Jahr> <Copyright Inhaber>

Jedem, der eine Kopie dieser Software und der zugehörigen Dokumentationsdateien(die Software) 
erhält, wird hiermit kostenlos die Erlaubnis erteilt, ohne Einschränkung mit der Software zu 
handeln, einschließlich und ohne Einschränkung der Rechte zur Nutzung, zum Kopieren, Ändern,
Zusammenführen, Veröffentlichen, Verteilen, Unterlizenzieren und / oder Verkaufen von Kopien 
der Software, und Personen, denen die Software zur Verfügung gestellt wird, dies unter den 
folgenden Bedingungen zu gestatten:

Der obige Urheberrechtshinweis und dieser Genehmigungshinweis müssen in allen Kopien oder 
wesentlichen Teilen der Software enthalten sein.

DIE SOFTWARE WIRD OHNE MÄNGELGEWÄHR UND OHNE JEGLICHE AUSDRÜCKLICHE ODER 
STILLSCHWEIGENDE GEWÄHRLEISTUNG,EINSCHLIEßLICH, ABER NICHT BESCHRÄNKT AUF
DIE GEWÄHRLEISTUNG DER MARKTGÄNGIGKEIT,DER EIGNUNG FÜR EINEN BESTIMMTEN 
ZWECK UND DER NICHTVERLETZUNG VON RECHTEN DRITTER, ZUR VERFÜGUNG GESTELLT.
DIE AUTOREN ODER URHEBERRECHTSINHABER SIND IN KEINEM FALL HAFTBAR FÜR 
ANSPRÜCHE, SCHÄDEN ODER ANDERE VERPFLICHTUNGEN, OB IN EINER VERTRAGS -
ODER HAFTUNGSKLAGE, EINER UNERLAUBTEN HANDLUNG ODER ANDERWEITIG, DIE 
SICH AUS, AUS ODER IN VERBINDUNG MIT DER SOFTWARE ODER DER NUTZUNG ODER 
ANDEREN GESCHÄFTEN MIT DER SOFTWARE ERGEBEN.";

        }
        
        
    }

    
}

    






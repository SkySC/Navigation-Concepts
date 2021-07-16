using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;

using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using plattform.DataModels;

namespace plattform
{
    /// <summary>
    /// Interaktionslogik für MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
       
        private List<SongModel> PlayList = new List<SongModel>();
        public MainWindow()
        {
            InitializeComponent();

            this.DataContext = new WindowViewModel(this);
            PlayList.Add(new SongModel { songTitle = "Elektronomia - Sky High pt.II [NCS Release].mp3" });
            player.Source = new Uri("D:\\Elektronomia.mp3");

            player.Volume = 0.5;
            
           
            //new Uri("D:\\Elektronomia.mp3");
            //myFrame.Content = new Login();

        }


        /// <summary>
        /// TitleBar_MouseDown - Drag if single-click, resize if double-click
        /// </summary>
        private void TitleBar_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left)
                if (e.ClickCount == 2)
                {
                    AdjustWindowSize();
                }
                else
                {
                    Application.Current.MainWindow.DragMove();
                }
        }

        /// <summary>
        /// CloseButton_Clicked
        /// </summary>
        private void CloseButton_Click(object sender, RoutedEventArgs e)
        {
            Application.Current.Shutdown();
        }

        /// <summary>
        /// MaximizedButton_Clicked
        /// </summary>
        private void MaximizeButton_Click(object sender, RoutedEventArgs e)
        {
            AdjustWindowSize();
        }

        /// <summary>
        /// Minimized Button_Clicked
        /// </summary>
        private void MinimizeButton_Click(object sender, RoutedEventArgs e)
        {

            this.WindowState = WindowState.Minimized;
        }

        /// <summary>
        /// Adjusts the WindowSize to correct parameters when Maximize button is clicked
        /// </summary>
        private void AdjustWindowSize()
        {
            if (this.WindowState == WindowState.Maximized)
            {
                this.WindowState = WindowState.Normal;
                maxi.Kind = MaterialDesignThemes.Wpf.PackIconKind.WindowMaximize;
                OuterBorder.Margin = new Thickness(0);
            }
            else
            {
                this.WindowState = WindowState.Maximized;
                maxi.Kind = MaterialDesignThemes.Wpf.PackIconKind.DockWindow;
                OuterBorder.Margin = new Thickness(6);

            }

        }

        private void PlaySong(object sender, RoutedEventArgs e)
        {
            SongName.Content = PlayList[0].songTitle;
            if (player.CanPause)
            {
                player.Pause();
                PlayIcon.Kind = MaterialDesignThemes.Wpf.PackIconKind.Play;
            }
            else
            {
                player.Play();

                PlayIcon.Kind = MaterialDesignThemes.Wpf.PackIconKind.Pause;
            }


        }
       

        
    }
}

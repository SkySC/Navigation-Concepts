using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace plattform
{
    class PageViewModel: System.Windows.Controls.Page
    {
        private MainMenu mm;

        public PageViewModel(MainMenu window)
        {
            mm = window;
           
        }
        public static ApplicationPage CurrentNistedPage { get; set; } = ApplicationPage.Songlist;
        public static bool change { get; set; } = false;
        
    }
}

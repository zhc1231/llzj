import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { useNav } from '../navigation';
import {
  Heart,
  Share2,
  Download,
  User,
  Calendar,
  Eye,
  MessageCircle,
  Palette,
  Music,
  Video,
  PenTool,
  ChevronRight
} from 'lucide-react';

const WorkDetailPage: React.FC = () => {
  const { goBack, pageParams } = useNav();
  const title = pageParams?.title || '夕阳无限好';
  const author = pageParams?.author || '王阿姨';
  const likes = pageParams?.likes || 289;
  const type = pageParams?.type || 'AI绘画';
  const image = pageParams?.image || 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=85';

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const typeIcons: Record<string, React.ElementType> = {
    'AI绘画': Palette,
    'AI音乐': Music,
    'AI视频': Video,
    'AI写作': PenTool,
  };

  const TypeIcon = typeIcons[type] || Palette;

  const relatedWorks = [
    { image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&q=80', title: '山水之间', author: '李叔叔', likes: 198 },
    { image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80', title: '花开富贵', author: '张奶奶', likes: 176 },
    { image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80', title: '金秋舞曲', author: '刘爷爷', likes: 245 },
    { image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80', title: '晨曦微光', author: '陈阿姨', likes: 167 },
  ];

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    alert('分享功能');
  };

  const handleDownload = () => {
    alert('下载作品');
  };

  return (
    <div className="min-h-full bg-slate-50 pb-28">
      <div className="relative">
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          <div className="absolute inset-0">
            <PageHeader title="作品详情" onBack={goBack} transparent rightActions={['share', 'more']} />
          </div>
        </div>
      </div>

      <div className="px-5 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <TypeIcon className="w-3.5 h-3.5" />
                  {type}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-2">{title}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 py-4 border-t border-b border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold">
              {author[0]}
            </div>
            <div className="flex-1">
              <div className="font-bold text-slate-800 text-lg">{author}</div>
              <div className="text-sm text-slate-500">创作达人 · 86件作品</div>
            </div>
            <button className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-2xl text-sm font-bold shadow-md">
              关注
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-rose-500 mb-1">
                <Heart className="w-5 h-5" fill="currentColor" />
                <span className="text-xl font-bold">{likeCount}</span>
              </div>
              <div className="text-sm text-slate-500">点赞</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-sky-500 mb-1">
                <Eye className="w-5 h-5" />
                <span className="text-xl font-bold">1,256</span>
              </div>
              <div className="text-sm text-slate-500">浏览</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-500 mb-1">
                <MessageCircle className="w-5 h-5" />
                <span className="text-xl font-bold">32</span>
              </div>
              <div className="text-sm text-slate-500">评论</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-500" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">作品描述</h2>
          </div>
          <p className="text-base text-slate-600 leading-relaxed">
            这是我用AI创作的一幅山水画，画面中夕阳西下，金色的阳光洒在群山之上，
            湖水倒映着天空的美丽色彩。希望这幅画能给您带来宁静和美好的感受。
            创作灵感来自于我年轻时去黄山旅游的美好回忆。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['山水画', '夕阳', '自然风光', '治愈系'].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 mt-5 mb-6">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <Palette className="w-5 h-5 text-violet-500" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">相关推荐</h2>
            </div>
            <button className="flex items-center gap-1 text-sm text-slate-400">
              查看更多
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {relatedWorks.map((work, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-slate-800 text-sm mb-1 truncate">{work.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{work.author}</span>
                    <div className="flex items-center gap-1 text-rose-500">
                      <Heart className="w-3.5 h-3.5" fill="currentColor" />
                      <span className="text-xs font-bold">{work.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-4 border-t border-slate-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all ${
              isLiked ? 'bg-rose-50 text-rose-500' : 'bg-slate-50 text-slate-600'
            }`}
          >
            <Heart className={`w-7 h-7 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-xs font-bold">点赞</span>
          </button>
          <button
            onClick={handleShare}
            className="w-16 h-16 rounded-2xl bg-slate-50 flex flex-col items-center justify-center gap-1 text-slate-600"
          >
            <Share2 className="w-7 h-7" />
            <span className="text-xs font-bold">分享</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 h-16 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-lg font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2"
          >
            <Download className="w-6 h-6" />
            下载作品
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
